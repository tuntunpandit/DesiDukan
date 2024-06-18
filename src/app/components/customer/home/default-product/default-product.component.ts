import { Component, Input, OnInit } from '@angular/core';
import { CurrencyPipe, SlicePipe } from '@angular/common';
import { Product } from '../../../../models/product';
import { RouterLink } from '@angular/router';
interface SubTab {
  id: string;
  title: string;
}

interface Tab {
  id: string;
  title: string;
  subTabs: SubTab[];
}

interface Item {
  id: string;
  title: string;
  tabs: Tab[];
  role: string[];
}
@Component({
  selector: 'app-default-product',
  standalone: true,
  imports: [SlicePipe, CurrencyPipe, RouterLink],
  templateUrl: './default-product.component.html',
  styleUrl: './default-product.component.scss',
})
export class DefaultProductComponent implements OnInit {
  @Input() products!: Array<Product>;

  finalData!: any;

  defaultArray: Item[] = [
    {
      id: 'UM1',
      role: [],
      title: 'UM',
      tabs: [
        {
          id: 'Cas1',
          title: 'case summary',
          subTabs: [
            {
              id: 'Mem1',
              title: 'member',
            },
            {
              id: 'Use2',
              title: 'user',
            },
          ],
        },
        {
          id: 'Cas3',
          title: 'Case details',
          subTabs: [],
        },
        {
          id: 'Cli2',
          title: 'Cli review',
          subTabs: [
            {
              id: 'Pro1',
              title: 'procedure',
            },
          ],
        },
      ],
    },
    {
      id: 'UM2',
      title: 'UM',
      role: [],
      tabs: [
        {
          id: 'Cas1',
          title: 'case summary',
          subTabs: [
            {
              id: 'Mem1',
              title: 'member',
            },
            {
              id: 'Use2',
              title: 'user',
            },
          ],
        },
        {
          id: 'Cas3',
          title: 'Case details',
          subTabs: [],
        },
        {
          id: 'Cli2',
          title: 'Cli review',
          subTabs: [
            {
              id: 'Pro1',
              title: 'procedure',
            },
          ],
        },
      ],
    },
    {
      id: 'Car2',
      title: 'care Team',
      role: [],
      tabs: [],
    },
  ];

  tenantSpecificArray: Item[] = [
    {
      id: 'UM1',
      title: 'UM',
      role: ['admin', 'user'],
      tabs: [
        {
          id: 'Cas1',
          title: 'case summary',
          subTabs: [
            {
              id: 'Mem1',
              title: 'member',
            },
            {
              id: 'Use2',
              title: 'user',
            },
          ],
        },
        {
          id: 'Cas3',
          title: 'Case details',
          subTabs: [],
        },
      ],
    },
    {
      id: 'UM2',
      title: 'dshkj',
      role: [],
      tabs: [],
    },
    {
      id: 'Car3',
      role: ['manager'],
      title: 'care Team',
      tabs: [],
    },
  ];

  ngOnInit(): void {
    console.log('deafault', this.defaultArray);
    console.log('tenant', this.tenantSpecificArray);
    console.log(this.mergeArrays(this.defaultArray, this.tenantSpecificArray));
  }

  mergeSubTabs(defaultSubTabs: SubTab[], tenantSubTabs: SubTab[]): SubTab[] {
    const mergedSubTabs = [...defaultSubTabs];

    tenantSubTabs.forEach((tenantSubTab) => {
      if (!mergedSubTabs.find((subTab) => subTab.id === tenantSubTab.id)) {
        mergedSubTabs.push(tenantSubTab);
      }
    });

    return mergedSubTabs;
  }

  mergeTabs(defaultTabs: Tab[], tenantTabs: Tab[]): Tab[] {
    const mergedTabs = [...defaultTabs];

    tenantTabs.forEach((tenantTab) => {
      const defaultTab = mergedTabs.find((tab) => tab.id === tenantTab.id);

      if (defaultTab) {
        defaultTab.subTabs = this.mergeSubTabs(
          defaultTab.subTabs,
          tenantTab.subTabs
        );
      } else {
        mergedTabs.push(tenantTab);
      }
    });

    return mergedTabs;
  }

  mergeRoles(defaultRoles: string[], tenantRoles: string[]): string[] {
    const mergedRoles = [...defaultRoles];

    tenantRoles.forEach((tenantRole) => {
      if (!mergedRoles.includes(tenantRole)) {
        mergedRoles.push(tenantRole);
      }
    });

    return mergedRoles;
  }

  mergeArrays(defaultArray: Item[], tenantSpecificArray: Item[]): Item[] {
    // Create a deep copy of the default array to avoid mutating it
    const finalData = JSON.parse(JSON.stringify(defaultArray));

    tenantSpecificArray.forEach((tenantItem) => {
      const defaultItem = finalData.find(
        (item: any) => item.id === tenantItem.id
      );

      if (defaultItem) {
        defaultItem.tabs = this.mergeTabs(defaultItem.tabs, tenantItem.tabs);
        defaultItem.role = this.mergeRoles(defaultItem.role, tenantItem.role);
      } else {
        finalData.push(tenantItem);
      }
    });

    return finalData;
  }
}
