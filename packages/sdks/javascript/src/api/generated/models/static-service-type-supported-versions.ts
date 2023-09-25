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


import { VariableTargets } from './variable-targets';

/**
 * 
 * @export
 * @interface StaticServiceTypeSupportedVersions
 */
export interface StaticServiceTypeSupportedVersions {
    /**
     * The service\'s version that is supported
     * @type {string}
     * @memberof StaticServiceTypeSupportedVersions
     */
    version?: string;
    /**
     * The list of VariableTarget
     * @type {Array<VariableTargets>}
     * @memberof StaticServiceTypeSupportedVersions
     */
    variable_targets?: Array<VariableTargets>;
}

