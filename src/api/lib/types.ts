export type Route = {
    method: string,
    path: string,
    handler: (req, res) => void;
}
