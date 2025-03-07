/* eslint-disable */
/**
 * devopness API
 * Devopness API - Painless essential DevOps to everyone 
 *
 * The version of the OpenAPI document: latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { NetworkProvisionInputSettings } from './network-provision-input-settings';

/**
 * Network provision input parameters
 * @export
 * @interface NetworkProvisionInput
 */
export interface NetworkProvisionInput {
    /**
     * The cloud service of the cloud provicer
     * @type {string}
     * @memberof NetworkProvisionInput
     */
    cloud_service_code: string;
    /**
     * The ID of the cloud credential
     * @type {number}
     * @memberof NetworkProvisionInput
     */
    credential_id: number;
    /**
     * 
     * @type {NetworkProvisionInputSettings}
     * @memberof NetworkProvisionInput
     */
    settings: NetworkProvisionInputSettings;
}

