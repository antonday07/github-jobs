export const INITIAL_PAGINATION = {
    totalItems: 1,
    itemCount: 1,
    itemsPerPage: 10,
    totalPages: 1,
    currentPage: 1,
};

export const TABLE_HEIGHT = 600;

export enum ClientIdEnum {
    ADMIN = 'ADMIN',
}

export enum HttpHeaderEnum {
    Role = 'role',
}

export const QUERY_PARAMS = {
    page: 1,
    limit: 10,
};

export enum UserShiftStatus {
    ACCEPT = 2,
    REJECT_BEFORE_WORKING = 3,
    CANCEL = 4,
    IN_PROGRESS = 6,
    WAITING_APPROVAL = 7,
    APPROVAL = 8,
    REJECT_AFTER_WORKING = 9,
    BREAK_TIME = 10,
    PENDING = 1,
    ALL = 'all',
}
