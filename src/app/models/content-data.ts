import { AboutInfo } from "./about-info";
import { Counter } from "./counter";
import { FeatureBox } from "./feature-box";
import { Slider } from "./slider";
import { Tab } from "./tab";

export class ContentData {
    aboutInfos: AboutInfo[] = [];
    featureBoxes: FeatureBox[] = [];
    counters: Counter[] = [];
    sliders: Slider[] = [];
    tabs: Tab[] = [];
    tabNavs: string[] = [];
}
