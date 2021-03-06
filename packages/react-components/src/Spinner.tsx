// Copyright 2017-2020 @polkadot/app-staking authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React from 'react';
import styled from 'styled-components';

interface Props {
  className?: string;
  variant?: 'app' | 'push' | 'mini';
}

function Spinner ({ className, variant = 'app' }: Props): React.ReactElement<Props> | null {
  const strokeWidth = variant === 'app' ? 2 : 4;

  return (
    <div className={[className, 'ui--Spinner', variant].join(' ')}>
      <div className="loader">
        <svg className="circular" viewBox="25 25 50 50">
          <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth={strokeWidth} strokeMiterlimit="10"/>
        </svg>
      </div>
    </div>
  );
}

export default styled(Spinner)`
  .loader {
    position: relative;
    margin: 0 auto;
    width: 64px;
    &:before {
      content: '';
      display: block;
      padding-top: 100%;
    }
  }

  .circular {
    animation: rotate 2s linear infinite;
    height: 100%;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }

  .path {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    animation: dash 1.5s ease-in-out infinite;
    stroke-linecap: round;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -35px;
    }
    100% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -124px;
    }
  }

  &.push {
    .loader {
      width: 40px;
    }

    .circular {
      stroke: #eee !important;
    }
  }
`;
