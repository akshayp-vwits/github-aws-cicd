#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkStack } from '../lib/cdk-stack';

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

const stage = app.node.tryGetContext('stage')
// @ts-ignore
const acc_no = envConfigs[stage].account_id
// @ts-ignore
const region1 = envConfigs[stage].region
new CdkStack(app, 'CdkStack', {env: { account: acc_no, region: region1 }
  /* If you don't specify 'env', this stack will be environment-agnostic.
   * Account/Region-dependent features and context lookups will not work,
   * but a single synthesized template can be deployed anywhere. */

  /* Uncomment the next line to specialize this stack for the AWS Account
   * and Region that are implied by the current CLI configuration. */
  // env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },

  /* Uncomment the next line if you know exactly what Account and Region you
   * want to deploy the stack to. */
  // env: { account: '123456789012', region: 'us-east-1' },

  /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
});
