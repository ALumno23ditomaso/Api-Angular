"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const api_service_1 = require("./api.service");
describe('ApiService', () => {
    let service;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(api_service_1.ApiService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
