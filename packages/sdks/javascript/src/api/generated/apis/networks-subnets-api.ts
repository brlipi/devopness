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

import { ApiBaseService } from "../../../services/ApiBaseService";
import { ApiResponse } from "../../../common/ApiResponse";
import { ArgumentNullException } from "../../../common/Exceptions";
import { ApiError } from '../../generated/models';
import { Subnet } from '../../generated/models';
import { SubnetNetworkCreate } from '../../generated/models';
import { SubnetRelation } from '../../generated/models';

/**
 * NetworksSubnetsApiService - Auto-generated
 */
export class NetworksSubnetsApiService extends ApiBaseService {
    /**
     * 
     * @summary Create a new subnet for the given network
     * @param {number} networkId The ID of the network.
     * @param {SubnetNetworkCreate} subnetNetworkCreate A JSON object containing the resource data
     */
    public async addNetworkSubnet(networkId: number, subnetNetworkCreate: SubnetNetworkCreate): Promise<ApiResponse<Subnet>> {
        if (networkId === null || networkId === undefined) {
            throw new ArgumentNullException('networkId', 'addNetworkSubnet');
        }
        if (subnetNetworkCreate === null || subnetNetworkCreate === undefined) {
            throw new ArgumentNullException('subnetNetworkCreate', 'addNetworkSubnet');
        }
        
        let queryString = '';

        const requestUrl = '/networks/{network_id}/subnets' + (queryString? `?${queryString}` : '');

        const response = await this.post <Subnet, SubnetNetworkCreate>(requestUrl.replace(`{${"network_id"}}`, encodeURIComponent(String(networkId))), subnetNetworkCreate);
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Return a list of all subnets belonging to a network
     * @param {number} networkId The ID of the network.
     * @param {number} [page] Number of the page to be retrieved
     * @param {number} [perPage] Number of items returned per page
     */
    public async listNetworkSubnets(networkId: number, page?: number, perPage?: number): Promise<ApiResponse<Array<SubnetRelation>>> {
        if (networkId === null || networkId === undefined) {
            throw new ArgumentNullException('networkId', 'listNetworkSubnets');
        }
        
        let queryString = '';
        const queryParams = { page: page, per_page: perPage, } as { [key: string]: any };
        for (const key in queryParams) {
            if (queryParams[key] === undefined || queryParams[key] === null) {
                continue;
            }

            queryString += (queryString? '&' : '') + `${key}=${encodeURI(queryParams[key])}`;
        }

        const requestUrl = '/networks/{network_id}/subnets' + (queryString? `?${queryString}` : '');

        const response = await this.get <Array<SubnetRelation>>(requestUrl.replace(`{${"network_id"}}`, encodeURIComponent(String(networkId))));
        return new ApiResponse(response);
    }
}
