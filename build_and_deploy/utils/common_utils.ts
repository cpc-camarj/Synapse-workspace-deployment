// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {DataFactoryType, DEFAULT_ARTIFACTS, DEFAULT_ARTIFACTS_TYPE} from "./artifacts_enum";

export function isStrNullOrEmpty(val: string): boolean {
    if (val === undefined || val === null || val.trim() === '') {
        return true;
    }
    return false;
}

export function isDefaultArtifact(artifact: string): boolean{
    let artifactJson = JSON.parse(artifact);
    for(let key in DEFAULT_ARTIFACTS){
        if(artifactJson.name.toLowerCase().indexOf(DEFAULT_ARTIFACTS[key as keyof typeof DEFAULT_ARTIFACTS]) != -1 &&
            artifactJson.type === DataFactoryType.linkedservice &&
            artifactJson.properties.type === DEFAULT_ARTIFACTS_TYPE[key as keyof typeof DEFAULT_ARTIFACTS_TYPE]
        )
            return true;
    };
    return false;
}