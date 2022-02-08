import * as React from 'react';
import { ICrudoperationProps } from './ICrudoperationProps';
import { ICrudoperationState } from './ICrudoperationState';
import { spoperation } from '../../services/spserices';
export default class Crudoperation extends React.Component<ICrudoperationProps, ICrudoperationState, {}> {
    _spOps: spoperation;
    selectedListTitle: string;
    constructor(props: ICrudoperationProps);
    getListTitle(event: any, data: any): void;
    componentDidMount(): void;
    render(): React.ReactElement<ICrudoperationProps>;
}
//# sourceMappingURL=Crudoperation.d.ts.map