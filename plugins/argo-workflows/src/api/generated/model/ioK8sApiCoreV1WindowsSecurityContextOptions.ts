// @ts-nocheck
/**
 * Argo Workflows API
 * Argo Workflows is an open source container-native workflow engine for orchestrating parallel jobs on Kubernetes. For more information, please see https://argoproj.github.io/argo-workflows/
 *
 * The version of the OpenAPI document: VERSION
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
* WindowsSecurityContextOptions contain Windows-specific options and credentials.
*/
export class IoK8sApiCoreV1WindowsSecurityContextOptions {
    /**
    * GMSACredentialSpec is where the GMSA admission webhook (https://github.com/kubernetes-sigs/windows-gmsa) inlines the contents of the GMSA credential spec named by the GMSACredentialSpecName field.
    */
    'gmsaCredentialSpec'?: string;
    /**
    * GMSACredentialSpecName is the name of the GMSA credential spec to use.
    */
    'gmsaCredentialSpecName'?: string;
    /**
    * HostProcess determines if a container should be run as a \'Host Process\' container. This field is alpha-level and will only be honored by components that enable the WindowsHostProcessContainers feature flag. Setting this field without the feature flag will result in errors when validating the Pod. All of a Pod\'s containers must have the same effective HostProcess value (it is not allowed to have a mix of HostProcess containers and non-HostProcess containers).  In addition, if HostProcess is true then HostNetwork must also be set to true.
    */
    'hostProcess'?: boolean;
    /**
    * The UserName in Windows to run the entrypoint of the container process. Defaults to the user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
    */
    'runAsUserName'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "gmsaCredentialSpec",
            "baseName": "gmsaCredentialSpec",
            "type": "string"
        },
        {
            "name": "gmsaCredentialSpecName",
            "baseName": "gmsaCredentialSpecName",
            "type": "string"
        },
        {
            "name": "hostProcess",
            "baseName": "hostProcess",
            "type": "boolean"
        },
        {
            "name": "runAsUserName",
            "baseName": "runAsUserName",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1WindowsSecurityContextOptions.attributeTypeMap;
    }
}
