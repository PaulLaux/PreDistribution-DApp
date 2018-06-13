/**
*
* Commit
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import BlueButton from 'components/BlueButton';
import { Button, InputNumber } from 'antd';

function Commit(props) {
  const {
    commitEthSendWindow,
    commitEthSendAmount,
    commitEthSendLoading,
    commitEthSendError,
    commitEthSendTx,
    onChangeWindow,
    onChangeAmount,
    onCommitEthSend,

    currentWindow,
    totalWindows,
  } = props;

  return (
    <div>
      <h3> Commit ETH </h3>
      Window:{' '}
      <InputNumber
        min={currentWindow}
        max={totalWindows - 1}
        step={1}
        value={commitEthSendWindow}
        onChange={(value) => onChangeWindow(value)}
      />
      <br />
      Amount:{' '}
      <InputNumber
        min={0.01}
        step={0.01}
        value={commitEthSendAmount}
        onChange={(value) => onChangeAmount(value)}
      />
      <br />
      Loading: {commitEthSendLoading ? 'true' : 'false'} <br />
      Error: {commitEthSendError || 'false'} <br />
      sendTx: {commitEthSendTx || 'null'} <br />
      <Button type="primary" loading={commitEthSendLoading} size="large" onClick={() => onCommitEthSend()}>
        Commit ETH
      </Button>
    </div>
  );
}

Commit.propTypes = {
  commitEthSendWindow: PropTypes.number,
  commitEthSendAmount: PropTypes.number,
  commitEthSendLoading: PropTypes.bool,
  commitEthSendError: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  commitEthSendTx: PropTypes.string,
  onChangeWindow: PropTypes.func,
  onChangeAmount: PropTypes.func,
  onCommitEthSend: PropTypes.func,

  currentWindow: PropTypes.number,
  totalWindows: PropTypes.number,
};

export default Commit;
