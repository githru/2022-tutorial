interface AppleStockColumnType {
    date: Date;
    close: number;
}

type AppleStockDataType = AppleStockColumnType[] & { columns?: Array<keyof AppleStockColumnType> };

export type { AppleStockDataType, AppleStockColumnType };
