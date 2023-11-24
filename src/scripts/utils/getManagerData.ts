import axios from "axios";
import {
    encodeForwardData,
    encodeManagerData,
    encodePerpData,
    encodeSpotData,
    encodeVolData
} from "../../utils/web3/managerData";
import { loadContractAddresses} from "../../utils/getAddresses";
import {vars} from "../../vars";

export async function getAllFeedManagerData() {
    const addresses = await loadContractAddresses()
    
    const now = Math.floor(Date.now() / 1000);
    const res = await axios.get(`${vars.exchangeUrl}/public/get_latest_signed_feeds?currency=`);

    const data = res.data.result;

    const encodedData = [];
    console.log(data.spot_data);
    for (const currency of Object.keys(data.spot_data)) {
        if (data.spot_data[currency].deadline < now) {
            console.warn(`Spot feed for ${currency} is expired`)
            continue;
        }
        let feedAddress;
        if (currency == "USDC") {
            feedAddress = addresses.stableFeed;
        } else {
            feedAddress = addresses.markets[currency].spotFeed;
        }
        encodedData.push([feedAddress, encodeSpotData(data.spot_data[currency])]);
    }

    for (const currency of Object.keys(data.fwd_data)) {
        for (const expiry of Object.keys(data.fwd_data[currency])) {
            if (+expiry < now) {
                continue;
            }
            if (data.fwd_data[currency][expiry].deadline < now) {
                console.warn(`Fwd feed for ${currency} expiry: ${expiry} is expired`)
                continue;
            }
            encodedData.push([addresses.markets[currency].forwardFeed, encodeForwardData(data.fwd_data[currency][expiry])]);
        }
    }

    for (const currency of Object.keys(data.vol_data)) {
        for (const expiry of Object.keys(data.vol_data[currency])) {
            if (+expiry < now) {
                continue;
            }
            if (data.vol_data[currency][expiry].deadline < now) {
                console.warn(`Vol feed for ${currency} expiry: ${expiry} is expired`)
                continue;
            }
            encodedData.push([addresses.markets[currency].volFeed, encodeVolData(data.vol_data[currency][expiry])]);
        }
    }

    for (const currency of Object.keys(data.perp_data)) {
        for (const type of Object.keys(data.perp_data[currency])) {
            if (data.perp_data[currency][type].deadline < now) {
                console.warn(`Perp feed for ${currency} type: ${type} is expired`)
                continue;
            }
            let feedAddress;
            if (type == "B") {
                feedAddress = addresses.markets[currency].ibpFeed;
            } else if (type == "A") {
                feedAddress = addresses.markets[currency].iapFeed;
            } else if (type == "P") {
                feedAddress = addresses.markets[currency].perpFeed;
            } else {
                throw new Error("Invalid perp type");
            }
            encodedData.push([feedAddress, encodePerpData(data.perp_data[currency][type])]);
        }
    }

    return encodeManagerData(encodedData);
}
