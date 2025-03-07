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
import { ResourceEvent } from '../../generated/models';
import { ResourceEventRelation } from '../../generated/models';

/**
 * ResourceEventsApiService - Auto-generated
 */
export class ResourceEventsApiService extends ApiBaseService {
    /**
     * 
     * @summary Process event for a resource
     * @param {string} resourceId The resource ID.
     * @param {string} resourceType The resource type to create events for.
     */
    public async addResourceEvent(resourceId: string, resourceType: string): Promise<ApiResponse<ResourceEvent>> {
        if (resourceId === null || resourceId === undefined) {
            throw new ArgumentNullException('resourceId', 'addResourceEvent');
        }
        if (resourceType === null || resourceType === undefined) {
            throw new ArgumentNullException('resourceType', 'addResourceEvent');
        }
        
        let queryString = '';

        const requestUrl = '/events/{resource_type}/{resource_id}' + (queryString? `?${queryString}` : '');

        const response = await this.post <ResourceEvent>(requestUrl.replace(`{${"resource_id"}}`, encodeURIComponent(String(resourceId))).replace(`{${"resource_type"}}`, encodeURIComponent(String(resourceType))));
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary List events of a resource type
     * @param {number} resourceId The resource ID.
     * @param {string} resourceType The resource type to get related events.
     * @param {number} [page] Number of the page to be retrieved
     * @param {number} [perPage] Number of items returned per page
     */
    public async listResourceEventsByResourceType(resourceId: number, resourceType: string, page?: number, perPage?: number): Promise<ApiResponse<Array<ResourceEventRelation>>> {
        if (resourceId === null || resourceId === undefined) {
            throw new ArgumentNullException('resourceId', 'listResourceEventsByResourceType');
        }
        if (resourceType === null || resourceType === undefined) {
            throw new ArgumentNullException('resourceType', 'listResourceEventsByResourceType');
        }
        
        let queryString = '';
        const queryParams = { page: page, per_page: perPage, } as { [key: string]: any };
        for (const key in queryParams) {
            if (queryParams[key] === undefined || queryParams[key] === null) {
                continue;
            }

            queryString += (queryString? '&' : '') + `${key}=${encodeURI(queryParams[key])}`;
        }

        const requestUrl = '/events/{resource_type}/{resource_id}' + (queryString? `?${queryString}` : '');

        const response = await this.get <Array<ResourceEventRelation>>(requestUrl.replace(`{${"resource_id"}}`, encodeURIComponent(String(resourceId))).replace(`{${"resource_type"}}`, encodeURIComponent(String(resourceType))));
        return new ApiResponse(response);
    }
}
