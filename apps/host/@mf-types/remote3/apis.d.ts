
    export type RemoteKeys = 'remote3/App';
    type PackageType<T> = T extends 'remote3/App' ? typeof import('remote3/App') :any;