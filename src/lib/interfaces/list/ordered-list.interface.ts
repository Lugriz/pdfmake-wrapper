import { IList } from '..';

/**
 * Interface that defines an ordered list
 */

export interface IOl extends IList {
    readonly ol: any[];
    readonly separator?: string | [string, string];
    readonly reversed?: boolean;
    readonly start?: number;
}