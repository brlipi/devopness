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



/**
 * 
 * @export
 * @interface ActionPipelineCreate
 */
export interface ActionPipelineCreate {
    /**
     * List of valid resource IDs
     * @type {Array<number>}
     * @memberof ActionPipelineCreate
     */
    servers?: Array<number>;
    /**
     * The name of the branch from which the application source code will be retrieved and deployed. Must not be greater than 100 characters.
     * @type {string}
     * @memberof ActionPipelineCreate
     */
    branch?: string;
}

