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
import { IoK8sApiCoreV1ExecAction } from './ioK8sApiCoreV1ExecAction';
import { IoK8sApiCoreV1HTTPGetAction } from './ioK8sApiCoreV1HTTPGetAction';
import { IoK8sApiCoreV1TCPSocketAction } from './ioK8sApiCoreV1TCPSocketAction';

/**
* LifecycleHandler defines a specific action that should be taken in a lifecycle hook. One and only one of the fields, except TCPSocket must be specified.
*/
export class IoK8sApiCoreV1LifecycleHandler {
    'exec'?: IoK8sApiCoreV1ExecAction;
    'httpGet'?: IoK8sApiCoreV1HTTPGetAction;
    'tcpSocket'?: IoK8sApiCoreV1TCPSocketAction;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "exec",
            "baseName": "exec",
            "type": "IoK8sApiCoreV1ExecAction"
        },
        {
            "name": "httpGet",
            "baseName": "httpGet",
            "type": "IoK8sApiCoreV1HTTPGetAction"
        },
        {
            "name": "tcpSocket",
            "baseName": "tcpSocket",
            "type": "IoK8sApiCoreV1TCPSocketAction"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1LifecycleHandler.attributeTypeMap;
    }
}
