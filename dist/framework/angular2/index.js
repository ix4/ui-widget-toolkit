(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/common"), require("@angular/core"), require("@angular/material"), require("@angular/platform-browser"), require("ui-widget-toolkit"));
	else if(typeof define === 'function' && define.amd)
		define("UWTAngular", ["@angular/common", "@angular/core", "@angular/material", "@angular/platform-browser", "ui-widget-toolkit"], factory);
	else if(typeof exports === 'object')
		exports["UWTAngular"] = factory(require("@angular/common"), require("@angular/core"), require("@angular/material"), require("@angular/platform-browser"), require("ui-widget-toolkit"));
	else
		root["UWTAngular"] = factory(root["ng"]["common"], root["ng"]["core"], root["ng"]["material"], root["ng"]["platformBrowser"], root["ui-widget-toolkit"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__angular_common__, __WEBPACK_EXTERNAL_MODULE__angular_core__, __WEBPACK_EXTERNAL_MODULE__angular_material__, __WEBPACK_EXTERNAL_MODULE__angular_platform_browser__, __WEBPACK_EXTERNAL_MODULE_ui_widget_toolkit__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/framework/angular2/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/framework/angular2/components/ui-widget-toolkit-checkbox-tree.ts":
/*!******************************************************************************!*\
  !*** ./src/framework/angular2/components/ui-widget-toolkit-checkbox-tree.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst core_1 = __webpack_require__(/*! @angular/core */ \"@angular/core\");\nconst common_1 = __webpack_require__(/*! @angular/common */ \"@angular/common\");\nconst material_1 = __webpack_require__(/*! @angular/material */ \"@angular/material\");\nlet UWTCheckboxTreeNodeImpl = class UWTCheckboxTreeNodeImpl {\n    constructor() {\n        this.onCheckChanged = new core_1.EventEmitter();\n        this.onCheckCompleted = new core_1.EventEmitter();\n    }\n    /**\n     * Called whenever the data is changed to notify the lower nodes.\n     */\n    ngOnChanges() {\n        this._initializeChildren(this.def);\n    }\n    ngDoCheck() {\n        let self = this;\n        if (self.def.propogateChange) {\n            self.handleCheckChanged(self.def);\n            self.def.propogateChange = false;\n        }\n    }\n    _emitCheckChanged($event) {\n        this.onCheckChanged.emit($event);\n    }\n    _emitCheckCompleted($event) {\n        this.onCheckCompleted.emit($event);\n    }\n    _onCheckChanged($event) {\n        this.def.checked = !this.def.checked;\n        this.handleCheckChanged($event);\n    }\n    handleCheckChanged($event) {\n        if (this.def.indeterminate) {\n            this.def.checked = true;\n            this.def.indeterminate = false;\n        }\n        this._emitCheckChanged(this.def);\n        this._updateChildCheckBox(this.def, this.def.checked);\n        this._updateParentCheckBox(this.def.parent);\n        this._emitCheckCompleted($event);\n    }\n    _updateChildCheckBox(nodeData, checked) {\n        if (nodeData.checked !== checked) {\n            nodeData.checked = checked;\n            this._emitCheckChanged(nodeData);\n        }\n        if (nodeData.children) {\n            // check things from bottom to top so when I scroll to last\n            // checked thing it goes to the top element not the bottom\n            for (let j = nodeData.children.length - 1; j >= 0; --j) {\n                let child = nodeData.children[j];\n                this._updateChildCheckBox(child, checked);\n            }\n        }\n    }\n    _updateParentCheckBox(parentData) {\n        if (parentData && parentData.children) {\n            let allChildChecked = true;\n            let noChildChecked = true;\n            for (let child of parentData.children) {\n                if (child.indeterminate) {\n                    allChildChecked = false;\n                    noChildChecked = false;\n                    break;\n                }\n                else if (!child.checked) {\n                    allChildChecked = false;\n                }\n                else if (child.checked) {\n                    noChildChecked = false;\n                }\n            }\n            if (allChildChecked) {\n                parentData.checked = true;\n                parentData.indeterminate = false;\n            }\n            else if (noChildChecked) {\n                parentData.checked = false;\n                parentData.indeterminate = false;\n            }\n            else {\n                parentData.checked = false;\n                parentData.indeterminate = true;\n            }\n            this._updateParentCheckBox(parentData.parent);\n        }\n    }\n    _initializeChildren(node) {\n        if (node && node.open) {\n            for (let i = 0; i < node.children.length; ++i) {\n                node.children[i].parent = node;\n                if (node.children[i].open) {\n                    this._initializeChildren(node.children[i]);\n                }\n            }\n        }\n    }\n    /**\n     * Returns the necessary classes.\n     *\n     * @return {string} The class name indicating whether the node is open or closed\n     */\n    _computeClass() {\n        var open = this.def.open;\n        var children = this.getChildren();\n        return 'node-preicon ' + ((open && children && children.length) ? 'expanded' : children && children.length ? 'collapsed' : '');\n    }\n    _computePadding() {\n        var children = this.getChildren();\n        return children && children.length ? {} : { 'padding-left': '18px' };\n    }\n    /**\n     * Returns the parent tree node. Returns `null` if root.\n     */\n    getParent() {\n        return this.def.parent;\n    }\n    /**\n     * Returns the children tree nodes.\n     */\n    getChildren() {\n        return this.def.children;\n    }\n    /**\n     * Display/Hide the children nodes.\n     */\n    toggleChildren() {\n        this.def.open = !this.def.open && this.def.children && this.def.children.length > 0;\n        this._initializeChildren(this.def);\n    }\n};\n__decorate([\n    core_1.Input()\n], UWTCheckboxTreeNodeImpl.prototype, \"def\", void 0);\n__decorate([\n    core_1.Output()\n], UWTCheckboxTreeNodeImpl.prototype, \"onCheckChanged\", void 0);\n__decorate([\n    core_1.Output()\n], UWTCheckboxTreeNodeImpl.prototype, \"onCheckCompleted\", void 0);\nUWTCheckboxTreeNodeImpl = __decorate([\n    core_1.Component({\n        selector: 'uwt-checkbox-tree-node',\n        styles: [`\n        .node-row {\n            padding-left: 4px;\n            padding-right: 4px;\n            white-space: nowrap;\n        }\n\n        .node-preicon.collapsed,\n        .node-preicon.expanded {\n            padding-left: 0px;\n        }\n\n        .node-preicon:before {\n            margin-right: 5px;\n        }\n\n        .node-preicon.collapsed:before {\n            content: '\\u002B';\n        }\n\n        .node-preicon.expanded:before {\n            content: '\\u2212';\n        }\n\n        .node-preicon,\n        .node-name {\n            cursor: pointer;\n        }\n\n        ul {\n            margin: 0;\n            padding-left: 20px;\n        }\n\n        li {\n            list-style-type: none;\n        }\n    `],\n        template: `\n        <div class='node-row' title='{{def.name}}'>\n            <span *ngIf='def.children && def.children.length' [ngClass]='_computeClass()' (click)='toggleChildren()'></span>\n            <mat-checkbox *ngIf='!def.notCheckable' [ngStyle]='_computePadding()' [checked]='def.checked' [indeterminate]='def.indeterminate' (change)='_onCheckChanged($event)'>{{def.name}}</mat-checkbox>\n            <ng-container *ngIf='def.notCheckable' [ngStyle]='_computePadding()'>{{def.name}}</ng-container>\n        </div>\n        <ul [hidden]='!def.open'>\n            <li *ngFor='let child of def.children'>\n                <uwt-checkbox-tree-node id='{{child.name}}' [def]='child' (onCheckChanged)='_emitCheckChanged($event)'\n                (onCheckCompleted)='_emitCheckCompleted($event)'\n                 class='checkbox-tree-node'></uwt-checkbox-tree-node>\n            </li>\n        </ul>\n    `\n    })\n], UWTCheckboxTreeNodeImpl);\nexports.UWTCheckboxTreeNodeImpl = UWTCheckboxTreeNodeImpl;\nlet UWTCheckboxTree = class UWTCheckboxTree {\n    constructor() {\n        this.onCheckChanged = new core_1.EventEmitter();\n        this.onCheckCompleted = new core_1.EventEmitter();\n    }\n    _onCheckChanged($event) {\n        this.onCheckChanged.emit($event);\n    }\n    _onCheckCompleted($event) {\n        this.onCheckCompleted.emit($event);\n    }\n};\n__decorate([\n    core_1.Input()\n], UWTCheckboxTree.prototype, \"data\", void 0);\n__decorate([\n    core_1.Output()\n], UWTCheckboxTree.prototype, \"onCheckChanged\", void 0);\n__decorate([\n    core_1.Output()\n], UWTCheckboxTree.prototype, \"onCheckCompleted\", void 0);\nUWTCheckboxTree = __decorate([\n    core_1.Component({\n        selector: 'uwt-checkbox-tree',\n        template: `\n        <div>\n            <uwt-checkbox-tree-node id='root' [def]='data' (onCheckChanged)='_onCheckChanged($event)'\n            (onCheckCompleted)='_onCheckCompleted($event)' class='checkbox-tree-node'></uwt-checkbox-tree-node>\n        </div>\n        `\n    })\n], UWTCheckboxTree);\nexports.UWTCheckboxTree = UWTCheckboxTree;\nlet UWTCheckboxTreeModule = class UWTCheckboxTreeModule {\n};\nUWTCheckboxTreeModule = __decorate([\n    core_1.NgModule({\n        imports: [common_1.CommonModule, material_1.MatCheckboxModule],\n        declarations: [UWTCheckboxTreeNodeImpl, UWTCheckboxTree],\n        exports: [UWTCheckboxTree]\n    })\n], UWTCheckboxTreeModule);\nexports.UWTCheckboxTreeModule = UWTCheckboxTreeModule;\n\n\n//# sourceURL=webpack://UWTAngular/./src/framework/angular2/components/ui-widget-toolkit-checkbox-tree.ts?");

/***/ }),

/***/ "./src/framework/angular2/components/ui-widget-toolkit-ng2.ts":
/*!********************************************************************!*\
  !*** ./src/framework/angular2/components/ui-widget-toolkit-ng2.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst core_1 = __webpack_require__(/*! @angular/core */ \"@angular/core\");\nconst common_1 = __webpack_require__(/*! @angular/common */ \"@angular/common\");\nconst platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ \"@angular/platform-browser\");\nconst UWT = __webpack_require__(/*! ui-widget-toolkit */ \"ui-widget-toolkit\");\nlet UWTChart = class UWTChart {\n    ngOnChanges(changes) {\n        if (!this.renderer) {\n            this.renderer = new UWT.D3Renderer('', this.colorManager);\n        }\n        if (this.chartDef) {\n            this.renderer.setDiv(this.chartElem.nativeElement);\n            UWT.Chart.finalize(this.chartDef);\n            this.renderer.invalidate(this.chartDef, this.renderOptions);\n        }\n    }\n};\n__decorate([\n    core_1.Input()\n], UWTChart.prototype, \"chartTitle\", void 0);\n__decorate([\n    core_1.Input()\n], UWTChart.prototype, \"chartDef\", void 0);\n__decorate([\n    core_1.Input()\n], UWTChart.prototype, \"renderOptions\", void 0);\n__decorate([\n    core_1.Input()\n], UWTChart.prototype, \"colorManager\", void 0);\n__decorate([\n    core_1.Input()\n], UWTChart.prototype, \"renderer\", void 0);\n__decorate([\n    core_1.Input()\n], UWTChart.prototype, \"onRender\", void 0);\n__decorate([\n    core_1.ViewChild('chart', { static: true })\n], UWTChart.prototype, \"chartElem\", void 0);\nUWTChart = __decorate([\n    core_1.Component({\n        selector: 'uwt-chart',\n        styles: [`\n        .axis path,\n        .axis line {\n            fill: none;\n            stroke: grey;\n            stroke-width: 1;\n            shape-rendering: crispEdges;\n        }\n        .axis text {\n            font-size: larger;\n        }\n        .axis .lane-axis-label {\n            font-size: .8em;\n        }\n        .lane-title {\n            font-size: larger;\n            font-style: italic;\n        }\n        .chart-title {\n            padding-top: 1px;\n        }\n        .chart-background {\n            stroke: white;\n            fill: white;\n        }\n        .brush .extent {\n            stroke: #fff;\n            shape-rendering: crispEdges;\n            fill-opacity: 0.125;\n        }\n        .zoom-region {\n            fill: black;\n            stroke: #fff;\n            shape-rendering: crispEdges;\n            fill-opacity: 0.125;\n        }\n        .legendCells .cell .label {\n            font-size: 12px;\n            font-family: Arial;\n        }\n        .chart-flame.labels {\n            font-size: 12px;\n            font-family: Arial;\n            font-weight: bold;\n            background-color: transparent;\n            color: black;\n        }\n        .no-pointer-events {\n            pointer-events: none;\n        }\n    `],\n        template: `\n        <div *ngIf='chartTitle' class='chart-title'>{{chartTitle}}</div>\n        <div #chart id='chart'></div>\n    `,\n        changeDetection: core_1.ChangeDetectionStrategy.OnPush\n    })\n], UWTChart);\nexports.UWTChart = UWTChart;\nlet UWTSwimlaneChart = class UWTSwimlaneChart {\n    constructor() {\n        this.chartOptions = [];\n        this.getChartOptions = function (index) {\n            if (index >= this.chartOptions.length) {\n                this.chartOptions[index] = UWT.copy(this.renderOptions);\n            }\n            return this.chartOptions[index];\n        };\n    }\n    ngOnChanges(changes) {\n    }\n};\n__decorate([\n    core_1.Input()\n], UWTSwimlaneChart.prototype, \"chartTitle\", void 0);\n__decorate([\n    core_1.Input()\n], UWTSwimlaneChart.prototype, \"chartDefs\", void 0);\n__decorate([\n    core_1.Input()\n], UWTSwimlaneChart.prototype, \"renderOptions\", void 0);\n__decorate([\n    core_1.Input()\n], UWTSwimlaneChart.prototype, \"colorManager\", void 0);\n__decorate([\n    core_1.Input()\n], UWTSwimlaneChart.prototype, \"renderer\", void 0);\n__decorate([\n    core_1.Input()\n], UWTSwimlaneChart.prototype, \"onRender\", void 0);\n__decorate([\n    core_1.ViewChild('chart', { static: true })\n], UWTSwimlaneChart.prototype, \"chartElem\", void 0);\nUWTSwimlaneChart = __decorate([\n    core_1.Component({\n        selector: 'uwt-swimlane-chart',\n        template: `\n        <div *ngIf='chartTitle' class='chart-title'>{{chartTitle}}</div>\n        <ng-container *ngFor='let chartDef of chartDefs; let i = index'>\n            <uwt-chart *ngIf='!chartDef.hide' [chartDef]='chartDef'\n            [renderOptions]='getChartOptions(i)' [colorManager]='colorManager'\n            [onRender]='onRender' [renderer]='renderer'></uwt-chart>\n        </ng-container>\n    `\n    })\n], UWTSwimlaneChart);\nexports.UWTSwimlaneChart = UWTSwimlaneChart;\nlet UWTPieChart = class UWTPieChart {\n    ngOnChanges(changes) {\n        if (!this.renderer) {\n            this.renderer = new UWT.D3Renderer('', this.colorManager);\n        }\n        while (this.chartElem.firstChild) {\n            this.chartElem.remove(this.chartElem.firstChild);\n        }\n        if (this.chartDef) {\n            this.renderer.setDiv(this.chartElem.nativeElement);\n            this.renderer.invalidate(this.chartDef, this.renderOptions);\n        }\n    }\n};\n__decorate([\n    core_1.Input()\n], UWTPieChart.prototype, \"chartTitle\", void 0);\n__decorate([\n    core_1.Input()\n], UWTPieChart.prototype, \"chartDef\", void 0);\n__decorate([\n    core_1.Input()\n], UWTPieChart.prototype, \"renderOptions\", void 0);\n__decorate([\n    core_1.Input()\n], UWTPieChart.prototype, \"colorManager\", void 0);\n__decorate([\n    core_1.Input()\n], UWTPieChart.prototype, \"renderer\", void 0);\n__decorate([\n    core_1.Input()\n], UWTPieChart.prototype, \"onRender\", void 0);\n__decorate([\n    core_1.ViewChild('chart', { static: true })\n], UWTPieChart.prototype, \"chartElem\", void 0);\nUWTPieChart = __decorate([\n    core_1.Component({\n        selector: 'uwt-pie-chart',\n        styles: [`\n        .legendCells .cell .label {\n            font-size: 12px;\n            font-family: Arial;\n        }\n\n        .chart {\n            margin: auto;\n            width: inherit;\n        }\n\n        .no-pointer-events {\n            pointer-events: none;\n        }\n    `],\n        template: `\n        <div *ngIf='chartTitle' class='chart-title'>{{chartTitle}}</div>\n        <div #chart id='chart'></div>\n    `,\n        changeDetection: core_1.ChangeDetectionStrategy.OnPush\n    })\n], UWTPieChart);\nexports.UWTPieChart = UWTPieChart;\nlet UWTRadarChart = class UWTRadarChart {\n    ngOnChanges(changes) {\n        if (!this.renderer) {\n            this.renderer = new UWT.D3Renderer('', this.colorManager);\n        }\n        while (this.chartElem.firstChild) {\n            this.chartElem.remove(this.chartElem.firstChild);\n        }\n        if (this.chartDef) {\n            this.renderer.setDiv(this.chartElem.nativeElement);\n            this.renderer.invalidate(this.chartDef, this.renderOptions);\n        }\n    }\n};\n__decorate([\n    core_1.Input()\n], UWTRadarChart.prototype, \"chartTitle\", void 0);\n__decorate([\n    core_1.Input()\n], UWTRadarChart.prototype, \"chartDef\", void 0);\n__decorate([\n    core_1.Input()\n], UWTRadarChart.prototype, \"renderOptions\", void 0);\n__decorate([\n    core_1.Input()\n], UWTRadarChart.prototype, \"colorManager\", void 0);\n__decorate([\n    core_1.Input()\n], UWTRadarChart.prototype, \"renderer\", void 0);\n__decorate([\n    core_1.Input()\n], UWTRadarChart.prototype, \"onRender\", void 0);\n__decorate([\n    core_1.ViewChild('chart', { static: true })\n], UWTRadarChart.prototype, \"chartElem\", void 0);\nUWTRadarChart = __decorate([\n    core_1.Component({\n        selector: 'uwt-radar-chart',\n        styles: [`\n        .legendCells .cell .label {\n            font-size: 12px;\n            font-family: Arial;\n        }\n\n        .chart {\n            margin: auto;\n            width: inherit;\n        }\n\n        .no-pointer-events {\n            pointer-events: none;\n        }\n    `],\n        template: `\n        <div *ngIf='chartTitle' class='chart-title'>{{chartTitle}}</div>\n        <div #chart id='chart'></div>\n    `,\n        changeDetection: core_1.ChangeDetectionStrategy.OnPush\n    })\n], UWTRadarChart);\nexports.UWTRadarChart = UWTRadarChart;\nlet UWTGrid = class UWTGrid {\n    ngOnChanges(changes) {\n        if (!this.renderer) {\n            this.renderer = new UWT.AgGridRenderer(undefined, undefined, this.colorManager);\n        }\n        this.renderer.setOnRenderCallback(this.onRender);\n        if (this.gridDef) {\n            this.renderer.setDiv(this.gridDef, this.gridElem.nativeElement);\n            this.renderer.invalidate(this.gridDef);\n        }\n    }\n};\n__decorate([\n    core_1.Input()\n], UWTGrid.prototype, \"gridTitle\", void 0);\n__decorate([\n    core_1.Input()\n], UWTGrid.prototype, \"gridDef\", void 0);\n__decorate([\n    core_1.Input()\n], UWTGrid.prototype, \"gridStyle\", void 0);\n__decorate([\n    core_1.Input()\n], UWTGrid.prototype, \"gridClass\", void 0);\n__decorate([\n    core_1.Input()\n], UWTGrid.prototype, \"colorManager\", void 0);\n__decorate([\n    core_1.Input()\n], UWTGrid.prototype, \"renderer\", void 0);\n__decorate([\n    core_1.Input()\n], UWTGrid.prototype, \"onRender\", void 0);\n__decorate([\n    core_1.ViewChild('grid', { static: true })\n], UWTGrid.prototype, \"gridElem\", void 0);\nUWTGrid = __decorate([\n    core_1.Component({\n        selector: 'uwt-grid',\n        styles: [`\n        div#grid {\n            height: 400px\n        }\n    `],\n        template: `\n        <div *ngIf='gridTitle' class='grid-title'>{{gridTitle}}</div>\n        <div #grid id='grid' [ngClass]='gridClass' [ngStyle]='gridStyle'></div>\n    `,\n        changeDetection: core_1.ChangeDetectionStrategy.OnPush\n    })\n], UWTGrid);\nexports.UWTGrid = UWTGrid;\nlet UWTFlowDiagram = class UWTFlowDiagram {\n    ngOnChanges(changes) {\n        if (!this.renderer) {\n            this.renderer = new UWT.D3Renderer('', this.colorManager);\n        }\n        this.renderer.setOnRenderCallback(this.onRender);\n        if (this.diagramDef) {\n            this.renderer.setDiv(this.diagramElem.nativeElement);\n            this.renderer.invalidate(this.diagramDef, this.renderOptions);\n        }\n    }\n};\n__decorate([\n    core_1.Input()\n], UWTFlowDiagram.prototype, \"diagramTitle\", void 0);\n__decorate([\n    core_1.Input()\n], UWTFlowDiagram.prototype, \"diagramDef\", void 0);\n__decorate([\n    core_1.Input()\n], UWTFlowDiagram.prototype, \"renderOptions\", void 0);\n__decorate([\n    core_1.Input()\n], UWTFlowDiagram.prototype, \"colorManager\", void 0);\n__decorate([\n    core_1.Input()\n], UWTFlowDiagram.prototype, \"renderer\", void 0);\n__decorate([\n    core_1.Input()\n], UWTFlowDiagram.prototype, \"onRender\", void 0);\n__decorate([\n    core_1.ViewChild('diagram', { static: true })\n], UWTFlowDiagram.prototype, \"diagramElem\", void 0);\nUWTFlowDiagram = __decorate([\n    core_1.Component({\n        selector: 'uwt-flow-diagram',\n        styles: [`\n        div#graph {\n            height: 400px\n        }\n\n        .node rect {\n            cursor: move;\n            fill-opacity: .9;\n            shape-rendering: crispEdges;\n        }\n\n        .node text {\n            pointer-events: none;\n            text-shadow: 0 1px 0 #fff;\n        }\n\n        .link {\n            fill: none;\n            stroke: #888;\n            stroke-opacity: .4;\n        }\n    `],\n        template: `\n        <div *ngIf='diagramTitle' class='diagram-title'>{{diagramTitle}}</div>\n        <div #diagram id='diagram'></div>\n    `,\n        changeDetection: core_1.ChangeDetectionStrategy.OnPush\n    })\n], UWTFlowDiagram);\nexports.UWTFlowDiagram = UWTFlowDiagram;\nlet UWTGraph = class UWTGraph {\n    ngOnChanges(changes) {\n        if (!this.renderer) {\n            this.renderer = new UWT.D3Renderer('', this.colorManager);\n        }\n        this.renderer.setOnRenderCallback(this.onRender);\n        if (this.graphDef) {\n            this.renderer.setDiv(this.graphElem.nativeElement);\n            this.renderer.invalidate(this.graphDef, this.renderOptions);\n        }\n    }\n};\n__decorate([\n    core_1.Input()\n], UWTGraph.prototype, \"graphTitle\", void 0);\n__decorate([\n    core_1.Input()\n], UWTGraph.prototype, \"graphDef\", void 0);\n__decorate([\n    core_1.Input()\n], UWTGraph.prototype, \"renderOptions\", void 0);\n__decorate([\n    core_1.Input()\n], UWTGraph.prototype, \"colorManager\", void 0);\n__decorate([\n    core_1.Input()\n], UWTGraph.prototype, \"renderer\", void 0);\n__decorate([\n    core_1.Input()\n], UWTGraph.prototype, \"onRender\", void 0);\n__decorate([\n    core_1.ViewChild('graph', { static: true })\n], UWTGraph.prototype, \"graphElem\", void 0);\nUWTGraph = __decorate([\n    core_1.Component({\n        selector: 'uwt-graph',\n        styles: [`\n        div#graph {\n            height: 400px\n        }\n\n        .nodes circle {\n            stroke: #fff;\n            stroke-width: 1.5px;\n        }\n\n        .link {\n            fill: none;\n            stroke: #888;\n            stroke-opacity: .4;\n        }\n    `],\n        template: `\n        <div *ngIf='graphTitle' class='graph-title'>{{graphTitle}}</div>\n        <div #graph id='graph'></div>\n    `\n    })\n], UWTGraph);\nexports.UWTGraph = UWTGraph;\nlet UWTHierarchyGraph = class UWTHierarchyGraph {\n    ngOnChanges(changes) {\n        if (!this.renderer) {\n            this.renderer = new UWT.D3Renderer('', this.colorManager);\n        }\n        this.renderer.setOnRenderCallback(this.onRender);\n        if (this.graphDef) {\n            this.renderer.setDiv(this.graphElem.nativeElement);\n            this.renderer.invalidate(this.graphDef, this.renderOptions);\n        }\n        if (!this.graphDef) {\n            while (this.graphElem.firstChild) {\n                this.graphElem.remove(this.graphElem.firstChild);\n            }\n        }\n    }\n};\n__decorate([\n    core_1.Input()\n], UWTHierarchyGraph.prototype, \"graphTitle\", void 0);\n__decorate([\n    core_1.Input()\n], UWTHierarchyGraph.prototype, \"graphDef\", void 0);\n__decorate([\n    core_1.Input()\n], UWTHierarchyGraph.prototype, \"renderOptions\", void 0);\n__decorate([\n    core_1.Input()\n], UWTHierarchyGraph.prototype, \"colorManager\", void 0);\n__decorate([\n    core_1.Input()\n], UWTHierarchyGraph.prototype, \"renderer\", void 0);\n__decorate([\n    core_1.Input()\n], UWTHierarchyGraph.prototype, \"onRender\", void 0);\n__decorate([\n    core_1.ViewChild('graph', { static: true })\n], UWTHierarchyGraph.prototype, \"graphElem\", void 0);\nUWTHierarchyGraph = __decorate([\n    core_1.Component({\n        selector: 'uwt-hierarchy-graph',\n        styles: [`\n        .h-node {\n            cursor: pointer;\n        }\n        .h-node rect {\n            shape-rendering: crispEdges;\n        }\n        .h-link {\n            cursor: pointer;\n            stroke-opacity: .4;\n        }\n        .link {\n            fill: none;\n            stroke: #888;\n            stroke-opacity: .4;\n        }\n    `],\n        template: `\n        <div *ngIf='graphTitle' class='graph-title'>{{graphTitle}}</div>\n        <div #graph id='graph'></div>\n    `\n    })\n], UWTHierarchyGraph);\nexports.UWTHierarchyGraph = UWTHierarchyGraph;\nlet UWTSunburstChart = class UWTSunburstChart {\n    ngOnChanges(changes) {\n        if (!this.renderer) {\n            this.renderer = new UWT.D3Renderer('', this.colorManager);\n        }\n        this.renderer.setOnRenderCallback(this.onRender);\n        while (this.chartElem.firstChild) {\n            this.chartElem.remove(this.chartElem.firstChild);\n        }\n        if (this.chartDef) {\n            this.renderer.setDiv(this.chartElem.nativeElement);\n            this.renderer.invalidate(this.chartDef, this.renderOptions);\n        }\n    }\n};\n__decorate([\n    core_1.Input()\n], UWTSunburstChart.prototype, \"chartTitle\", void 0);\n__decorate([\n    core_1.Input()\n], UWTSunburstChart.prototype, \"chartDef\", void 0);\n__decorate([\n    core_1.Input()\n], UWTSunburstChart.prototype, \"renderOptions\", void 0);\n__decorate([\n    core_1.Input()\n], UWTSunburstChart.prototype, \"colorManager\", void 0);\n__decorate([\n    core_1.Input()\n], UWTSunburstChart.prototype, \"renderer\", void 0);\n__decorate([\n    core_1.Input()\n], UWTSunburstChart.prototype, \"onRender\", void 0);\n__decorate([\n    core_1.ViewChild('chart', { static: true })\n], UWTSunburstChart.prototype, \"chartElem\", void 0);\nUWTSunburstChart = __decorate([\n    core_1.Component({\n        selector: 'uwt-sunburst-chart',\n        styles: [`\n        .legendCells .cell .label {\n            font-size: 12px;\n            font-family: Arial;\n        }\n\n        .chart {\n            margin: auto;\n            width: inherit;\n        }\n\n        .no-pointer-events {\n            pointer-events: none;\n        }\n    `],\n        template: `\n        <div *ngIf='chartTitle' class='chart-title'>{{chartTitle}}</div>\n        <div #chart id='chart'></div>\n    `,\n        changeDetection: core_1.ChangeDetectionStrategy.OnPush\n    })\n], UWTSunburstChart);\nexports.UWTSunburstChart = UWTSunburstChart;\nlet UWTAxis = class UWTAxis {\n    ngOnChanges(changes) {\n        if (!this.renderer) {\n            this.renderer = new UWT.D3Renderer('');\n        }\n        if (this.axisDef) {\n            this.renderer.setDiv(this.axisElem.nativeElement);\n            this.renderer.invalidate(this.axisDef, this.renderOptions);\n        }\n    }\n};\n__decorate([\n    core_1.Input()\n], UWTAxis.prototype, \"axisDef\", void 0);\n__decorate([\n    core_1.Input()\n], UWTAxis.prototype, \"renderOptions\", void 0);\n__decorate([\n    core_1.Input()\n], UWTAxis.prototype, \"renderer\", void 0);\n__decorate([\n    core_1.Input()\n], UWTAxis.prototype, \"onRender\", void 0);\n__decorate([\n    core_1.ViewChild('axis', { static: true })\n], UWTAxis.prototype, \"axisElem\", void 0);\nUWTAxis = __decorate([\n    core_1.Component({\n        selector: 'uwt-axis',\n        styles: [`\n        .axis path,\n        .axis line {\n            fill: none;\n            stroke: grey;\n            stroke-width: 1;\n            shape-rendering: crispEdges;\n        }\n        .axis text {\n            font-size: larger;\n        }\n        .axis .lane-axis-label {\n            font-size: .8em;\n        }\n        .lane-title {\n            font-size: larger;\n            font-style: italic;\n        }\n        .chart-background {\n            stroke: white;\n            fill: white;\n        }\n        .brush .extent {\n            stroke: #fff;\n            shape-rendering: crispEdges;\n            fill-opacity: 0.125;\n        }\n        .zoom-region {\n            fill: black;\n            stroke: #fff;\n            shape-rendering: crispEdges;\n            fill-opacity: 0.125;\n        }\n        .no-pointer-events {\n            pointer-events: none;\n        }\n    `],\n        template: `\n        <div #axis id='axis'></div>\n    `,\n        changeDetection: core_1.ChangeDetectionStrategy.OnPush\n    })\n], UWTAxis);\nexports.UWTAxis = UWTAxis;\nlet UWTModule = class UWTModule {\n};\nUWTModule = __decorate([\n    core_1.NgModule({\n        imports: [platform_browser_1.BrowserModule, common_1.CommonModule],\n        declarations: [UWTAxis, UWTChart, UWTSwimlaneChart, UWTPieChart, UWTGrid, UWTFlowDiagram,\n            UWTGraph, UWTSunburstChart, UWTHierarchyGraph, UWTAxis, UWTRadarChart],\n        exports: [UWTAxis, UWTChart, UWTSwimlaneChart, UWTPieChart, UWTGrid, UWTFlowDiagram,\n            UWTGraph, UWTSunburstChart, UWTHierarchyGraph, UWTRadarChart]\n    })\n], UWTModule);\nexports.UWTModule = UWTModule;\n\n\n//# sourceURL=webpack://UWTAngular/./src/framework/angular2/components/ui-widget-toolkit-ng2.ts?");

/***/ }),

/***/ "./src/framework/angular2/index.ts":
/*!*****************************************!*\
  !*** ./src/framework/angular2/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nfunction __export(m) {\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\n}\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__export(__webpack_require__(/*! ./components/ui-widget-toolkit-checkbox-tree */ \"./src/framework/angular2/components/ui-widget-toolkit-checkbox-tree.ts\"));\n__export(__webpack_require__(/*! ./components/ui-widget-toolkit-ng2 */ \"./src/framework/angular2/components/ui-widget-toolkit-ng2.ts\"));\n\n\n//# sourceURL=webpack://UWTAngular/./src/framework/angular2/index.ts?");

/***/ }),

/***/ "@angular/common":
/*!****************************************************************************************************************************!*\
  !*** external {"root":["ng","common"],"commonjs":"@angular/common","commonjs2":"@angular/common","amd":"@angular/common"} ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__angular_common__;\n\n//# sourceURL=webpack://UWTAngular/external_%7B%22root%22:%5B%22ng%22,%22common%22%5D,%22commonjs%22:%22@angular/common%22,%22commonjs2%22:%22@angular/common%22,%22amd%22:%22@angular/common%22%7D?");

/***/ }),

/***/ "@angular/core":
/*!********************************************************************************************************************!*\
  !*** external {"root":["ng","core"],"commonjs":"@angular/core","commonjs2":"@angular/core","amd":"@angular/core"} ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__angular_core__;\n\n//# sourceURL=webpack://UWTAngular/external_%7B%22root%22:%5B%22ng%22,%22core%22%5D,%22commonjs%22:%22@angular/core%22,%22commonjs2%22:%22@angular/core%22,%22amd%22:%22@angular/core%22%7D?");

/***/ }),

/***/ "@angular/material":
/*!************************************************************************************************************************************!*\
  !*** external {"root":["ng","material"],"commonjs":"@angular/material","commonjs2":"@angular/material","amd":"@angular/material"} ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__angular_material__;\n\n//# sourceURL=webpack://UWTAngular/external_%7B%22root%22:%5B%22ng%22,%22material%22%5D,%22commonjs%22:%22@angular/material%22,%22commonjs2%22:%22@angular/material%22,%22amd%22:%22@angular/material%22%7D?");

/***/ }),

/***/ "@angular/platform-browser":
/*!*******************************************************************************************************************************************************************!*\
  !*** external {"root":["ng","platformBrowser"],"commonjs":"@angular/platform-browser","commonjs2":"@angular/platform-browser","amd":"@angular/platform-browser"} ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__angular_platform_browser__;\n\n//# sourceURL=webpack://UWTAngular/external_%7B%22root%22:%5B%22ng%22,%22platformBrowser%22%5D,%22commonjs%22:%22@angular/platform-browser%22,%22commonjs2%22:%22@angular/platform-browser%22,%22amd%22:%22@angular/platform-browser%22%7D?");

/***/ }),

/***/ "ui-widget-toolkit":
/*!************************************!*\
  !*** external "ui-widget-toolkit" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_ui_widget_toolkit__;\n\n//# sourceURL=webpack://UWTAngular/external_%22ui-widget-toolkit%22?");

/***/ })

/******/ });
});