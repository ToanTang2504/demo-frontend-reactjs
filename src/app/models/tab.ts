export class Tab {
    id: number = 0;
    tabContents: TabContent[] = [];
}

class TabContent {
    description: string = '';
    name: string = '';
    price: string = '';
}
