import { TestBed } from '@angular/core/testing';
import { FetchService } from './fetch.service';
import { Doctor } from '../Doctor';

describe('FetchService', () => {
  /* beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
 */

  const expectedDoctors: Doctor[] = [];
  const okResponse = new Response(JSON.stringify(expectedDoctors), {
    status: 200,
    statusText: 'OK',
  });

 it('returns doctors', () => {
    
/*   //ARRANGE
    const fetchSpy = jasmine.createSpy('fetch').and.returnValue(okResponse)
    const service = new FetchService(fetchSpy)
  
    //ACT
  service.getDoctors().subscribe(
    doctors => {
      expect(doctors).toEqual(expectedDoctors, 'expected heroes');
    },
    );
     */
  });

  /* it('should return an error when the server returns a 404', (done: DoneFn) => {
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
