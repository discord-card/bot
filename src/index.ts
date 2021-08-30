import { smallCard, longCard, bigCard } from './card';
export * from './card';
import { Options } from './util';
export { Options } from './util';
import fetch from 'node-fetch';


export async function generateCard(size: 'small' | 'long' | 'big', opts: Options | {
    id: string
}) {
    let options = opts as Options;

    switch (size) {
        case 'small': return await smallCard(options);
        case 'long': return await longCard(options);
        case 'big': return await bigCard(options);
        default: throw new Error('Invalid Card size');
    }
}