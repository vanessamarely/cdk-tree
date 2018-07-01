import { Component, OnInit } from '@angular/core';
import { Observable, of as observableOf } from 'rxjs';
import { NestedTreeControl } from '@angular/cdk/tree';

export type Classification = { name: string, children: Classification[], newSpecies?: number }


@Component({
  selector: 'app-main-tree-material',
  templateUrl: './main-tree-material.component.html',
  styleUrls: ['./main-tree-material.component.scss']
})
export class MainTreeMaterialComponent  {

  constructor() {}

  classifications: Classification[] = [
    {
      name: 'Animalia',
      newSpecies: 5,
      children: [
        {
          name: "Chordata",
          children: [
            {name: "Craniata", children: []},
            {name: "Tunicata", children: []},
            {name: "Cephalochordata", children: []},
          ],
        },
        {
          name: "Mollusca",
          children: [
            {name: "Gastropoda", children: []},
            {name: "Bivalvia", children: []},
            {name: "Cephalopoda", children: []},
          ]
        }
      ]
    },
    {
      name: "Plantae",
      children: [
        {
          name: "Streptobionta",
          children: [
            { name: "klebsormidiophyceae", children: []},
            { name: "Phragmoplastophyta", children: []},
          ]
        }
      ]
    }
  ]

  treeControl = new NestedTreeControl<Classification>(node => observableOf(node.children));


}
