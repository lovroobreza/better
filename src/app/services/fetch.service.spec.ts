import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FetchService } from './fetch.service';
import { Doctor } from '../Doctor';
import {asyncData, asyncError} from '../../../testing'

describe('FetchService', () => {
  let service: FetchService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  beforeEach(() => {
    // TODO: spy on other methods too
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new FetchService(httpClientSpy);
  });

 
 /*  it('should return expected doctors (HttpClient called once)', (done: DoneFn) => {
    const expectedDoctors: Doctor[] = [];
  
    httpClientSpy.get.and.returnValue(asyncData(expectedDoctors));
  
    service.getDoctors().subscribe(
      doctors => {
        expect(doctors).toEqual(expectedDoctors, 'expected heroes');
        done();
      },
      done.fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should return an error when the server returns a 404', (done: DoneFn) => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404, statusText: 'Not Found'
    });
  
    httpClientSpy.get.and.returnValue(asyncError(errorResponse));
  
    service.getDoctors().subscribe(
      doctors => done.fail('expected an error, not heroes'),
      error  => {
        expect(error.message).toContain('test 404 error');
        done();
      }
    );
    
  }) */
  
});
