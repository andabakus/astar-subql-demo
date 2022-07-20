import { Option, Struct } from '@polkadot/types-codec';
import { Balance } from '@polkadot/types/interfaces';
import { SubstrateEvent } from "@subql/types";
import { Tvl } from '../types';
import { Reward } from '../types/models';

export async function handleNewEraEvent(event: SubstrateEvent): Promise<void> {
    const {event: {data: [era]}} = event;
    logger.info(`New era: ${era}`);

    const result = await api.query.dappsStaking.generalEraInfo<Option<StakingEraInfo>>(era);
    const tvl = result.unwrap().locked;

    const record = new Tvl(era.toString());
    record.tvl = tvl.toBigInt();
    record.startedAt = event.block.timestamp;
    await record.save();
}

interface StakingEraInfo extends Struct {
    rewards: {
        stakers: Balance;
        dapps: Balance;
    }
    staked: Balance;
    locked: Balance;
}


export async function handleRewardEvent(event: SubstrateEvent): Promise<void> {

    const eraIndex = (event.event.data[2]).toString();
    const accountId = event.event.data[0].toString();
    const idString = eraIndex + "___" + accountId
    const record = new Reward(idString);

    record.accountId = accountId
    record.eraIndex = new Number(eraIndex).valueOf();
    record.smartContract = event.event.data[1].toString();
    record.balanceOf = (event.event.data[3] as Balance).toBigInt();

    logger.info(`New event: ${record}`);
    await record.save();
}

