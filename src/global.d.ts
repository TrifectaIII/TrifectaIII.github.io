declare module '*.pdf'

declare class ClipboardItem {

    constructor(data: { [mimeType: string]: Blob });

}
