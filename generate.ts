import { grabAllChannels, loadAllChannels }  from './download.ts'
import { filterAndTransform, ChannelInfo } from './convert.ts'

let _ = await grabAllChannels();
let lines = await loadAllChannels();

const whiteList: Array<ChannelInfo> = [
    { channel: "5.USA.uk", niceName: "5 USA",  group: "UK"},
    { channel: "A.and.E.US.-.Eastern.Feed.us", niceName: "A&E",  group: "US"},
    { channel: "ABC.(WABC).New.York,.NY.us", niceName: "ABC New York",  group: "US"},
    { channel: "ACC.Network.us", niceName: "ACC Network",  group: "US"},
   
];

let m3u = await filterAndTransform(lines, whiteList);
let x = await Deno.writeTextFile('index.m3u', m3u)
