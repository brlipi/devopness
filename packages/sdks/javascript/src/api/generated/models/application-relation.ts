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


import { ApplicationLastDeployments } from './application-last-deployments';
import { ApplicationType } from './application-type';
import { SourceProvider } from './source-provider';

/**
 * 
 * @export
 * @interface ApplicationRelation
 */
export interface ApplicationRelation {
    /**
     * Unique ID of the application
     * @type {number}
     * @memberof ApplicationRelation
     */
    id: number;
    /**
     * Numeric ID of the project to which the application belongs to
     * @type {number}
     * @memberof ApplicationRelation
     */
    project_id: number;
    /**
     * Numeric ID of the environment to which the application belongs to
     * @type {number}
     * @memberof ApplicationRelation
     */
    environment_id: number;
    /**
     * The id of the user who created the application and to whom the application belongs
     * @type {number}
     * @memberof ApplicationRelation
     */
    created_by: number;
    /**
     * The application\'s unique name
     * @type {string}
     * @memberof ApplicationRelation
     */
    name: string;
    /**
     * 
     * @type {ApplicationType}
     * @memberof ApplicationRelation
     */
    type: ApplicationType;
    /**
     * The domain or sub-domain through which the application deployed with these settings will be accessible. It can be a naked domain or any subdomain. If app has domain names `testing.my-app.com`, `staging.my-app.com` and `www.my-app.com` a possible good candidate for the application name would be the \"naked\" domain `my-app.com`
     * @type {string}
     * @memberof ApplicationRelation
     */
    domain_name: string;
    /**
     * The full name of a repository (`repository_owner/repository_name`) containing the application source code. Required when the `source_provider_id` field is informed.
     * @type {string}
     * @memberof ApplicationRelation
     */
    repository: string;
    /**
     * The name part of a repository full name (`repository_owner/repository_name`)
     * @type {string}
     * @memberof ApplicationRelation
     */
    repository_name: string;
    /**
     * The owner part of a repository full name (`repository_owner/repository_name`)
     * @type {string}
     * @memberof ApplicationRelation
     */
    repository_owner: string;
    /**
     * The version control branch that, by default, will be used when a deployment is triggered and no other branch name is informed.
     * @type {string}
     * @memberof ApplicationRelation
     */
    default_branch: string;
    /**
     * Indicates if push to deploy webhooks are enabled for this application. If enabled an app deployment will be automatically triggered when new changes are committed to the `default_branch`
     * @type {boolean}
     * @memberof ApplicationRelation
     */
    push_to_deploy: boolean;
    /**
     * The programming language runtime environment to be used to serve the application. E.g.: if a front-end web app is developed using Node.js, but should be served statically (a SPA application, for instance) then this field value should be `html`.
     * @type {string}
     * @memberof ApplicationRelation
     */
    programming_language: string;
    /**
     * The language runtime engine version to be used to execute this application on the deployed servers
     * @type {string}
     * @memberof ApplicationRelation
     */
    engine_version: string;
    /**
     * The base framework on top of which the application has been implemented - it might have impact on the steps to be performed during application deployment
     * @type {string}
     * @memberof ApplicationRelation
     */
    framework: string;
    /**
     * The relative directory where package manager\'s manifest files (`package.json`, `composer.json`, `yarn.lock`, etc) are located. It needs to be set for applications where the actual source code is not located in the top level directory of the repository.
     * @type {string}
     * @memberof ApplicationRelation
     */
    root_directory: string;
    /**
     * The relative web directory where publicly accessible assets are located and the web content should be served from
     * @type {string}
     * @memberof ApplicationRelation
     */
    public_directory: string;
    /**
     * The application\'s entrypoint
     * @type {string}
     * @memberof ApplicationRelation
     */
    entrypoint: string;
    /**
     * Application\'s listening address
     * @type {string}
     * @memberof ApplicationRelation
     */
    listening_address: string;
    /**
     * The number of deployment history, logs and artifacts to keep stored in both devopness servers and user\'s servers. OR The number of deployment artifacts to be retained in the user\'s servers, making it easier and faster to rollback to previous versions
     * @type {number}
     * @memberof ApplicationRelation
     */
    deployments_keep: number;
    /**
     * Indicates if at deployment time Devopness should execute package manager commands to install dependencies used in development mode
     * @type {boolean}
     * @memberof ApplicationRelation
     */
    install_dependencies_dev: boolean;
    /**
     * Indicates if at deployment time Devopness should execute package manager commands to install dependencies used in production mode
     * @type {boolean}
     * @memberof ApplicationRelation
     */
    install_dependencies_prod: boolean;
    /**
     * Indicates if the application requires a daemon to keep it alive
     * @type {boolean}
     * @memberof ApplicationRelation
     */
    requires_daemon: boolean;
    /**
     * 
     * @type {ApplicationLastDeployments}
     * @memberof ApplicationRelation
     */
    last_deployments?: ApplicationLastDeployments;
    /**
     * 
     * @type {SourceProvider}
     * @memberof ApplicationRelation
     */
    source_provider?: SourceProvider;
    /**
     * The date and time when the record was created
     * @type {string}
     * @memberof ApplicationRelation
     */
    created_at: string;
    /**
     * The date and time when the record was last updated
     * @type {string}
     * @memberof ApplicationRelation
     */
    updated_at: string;
}

