﻿import * as utilsEnum from './utils/enum';
import * as utilsFunction from './utils/function';
import * as utilsObject from './utils/object';
import * as utilsString from './utils/string';
import utilsFetch from './utils/fetch';

import PriceFormatting from './price-formatting/price-formatting';
import priceFormatOptions from './price-formatting/format-options';
import NumberFormatting from './number-formatting/number-formatting';

import log from './log';
import microEmitter from './micro-emitter';

import * as batch from './openapi/batch-util';
import TransportCore from './openapi/transport/core';
import TransportAuth from './openapi/transport/auth';
import TransportBatch from './openapi/transport/batch';
import TransportQueue from './openapi/transport/queue';
import TransportRetry from './openapi/transport/retry';
import TransportPutPatchDiagnositicsQueue from './openapi/transport/putPatchDiagnosticsQueue';
import Streaming from './openapi/streaming/streaming';
import * as streamingTransports from './openapi/streaming/connection/transportTypes';
import AuthProvider from './openapi/authProvider';

export default {
    log,
    microEmitter,
    NumberFormatting,
    PriceFormatting,
    priceFormatOptions,
    openapi: {
        AuthProvider,
        batch,
        TransportCore,
        TransportAuth,
        TransportBatch,
        TransportQueue,
        TransportRetry,
        TransportPutPatchDiagnositicsQueue,
        Streaming,
        streamingTransports,
    },
    utils: {
        enum: utilsEnum,
        function: utilsFunction,
        object: utilsObject,
        string: utilsString,
        fetch: utilsFetch,
    },
};
