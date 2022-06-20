import React, {FC} from 'react';
import {css, cx} from '@emotion/css';

import './Hello.css';

type Props = {};

export const Hello: FC<Props> = ({}) => {
  return <div>
    <div className={cx(css`border: 1px solid red`, 'existing')}>Hello</div>
  </div>;
}
