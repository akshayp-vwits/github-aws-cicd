#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkStack } from '../lib/cdk-stack';
import {DefaultStackSynthesizer} from "@aws-cdk/core";

const app = new cdk.App();
const envConfigs = {
    integration: {
        account_id: '064524996963',
        region: "eu-west-1"
    },
    prelive: {
        account_id: '064524996963',
        region: "eu-west-1"
    },
    live: {
        account_id: '706755025331',
        region: "eu-west-1"
    },
    development: {
        account_id: '221090739390',
        region: "eu-west-1"
    }
}

const dev  = { account: '221090739390', region: 'eu-west-1' };

//const stage = app.node.tryGetContext('stage')
// @ts-ignore
//const acc_no = envConfigs[stage].account_id
// @ts-ignore
//const region1 = envConfigs[stage].region
new CdkStack(app, 'dev', { env: dev ,
        synthesizer: new DefaultStackSynthesizer({
            // Name of the S3 bucket for file assets
            fileAssetsBucketName: 'fx-development-all-infrastructure-cdk',
        })},
    );

