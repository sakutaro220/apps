// Copyright 2017-2020 @polkadot/app-explorer authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { I18nProps as Props } from '@polkadot/react-components/types';

import BN from 'bn.js';
import React from 'react';
import { SummaryBox, CardSummary } from '@polkadot/react-components';
import { BestFinalized, BestNumber, BlockToTime, TimeNow, TotalIssuance } from '@polkadot/react-query';

import SummarySession from './SummarySession';
import translate from './translate';

const ONE_BLOCK = new BN(1);

function Summary ({ t }: Props): React.ReactElement<Props> {
  return (
    <SummaryBox>
      <section>
        <CardSummary label={t('last block')}>
          <TimeNow />
        </CardSummary>
        <CardSummary
          className='ui--media-small'
          label={t('target')}
        >
          <BlockToTime blocks={ONE_BLOCK} />
        </CardSummary>
        <CardSummary
          className='ui--media-small'
          label={t('total issuance')}
        >
          <TotalIssuance />
        </CardSummary>
      </section>
      <section className='ui--media-large'>
        <SummarySession withEra={false} />
      </section>
      <section>
        <CardSummary label={t('finalized')}>
          <BestFinalized />
        </CardSummary>
        <CardSummary label={t('best')}>
          <BestNumber />
        </CardSummary>
      </section>
    </SummaryBox>
  );
}

export default translate(Summary);
