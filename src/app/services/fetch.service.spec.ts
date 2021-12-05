import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { inject, TestBed } from '@angular/core/testing';
import { Doctor } from '../Doctor';
import { FetchService } from './fetch.service';

fdescribe('Fetch Service', () => {
  let fetchService: FetchService
  let controller: HttpTestingController

  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[FetchService]
    })
    fetchService = TestBed.inject(FetchService);
    controller = TestBed.inject(HttpTestingController);
  })


  it('returns data from api', ()=>{
  const expectedDoctors: Doctor[] = [{ id: 1, name:'fake', username:'string', email:'string', address: { street:'string', city:'string'}, phone: 'string', website: 'string',company: { }},
     { id: 1, name:'fake', username:'string', email:'string', address: { street:'string', city:'string'}, phone: 'string', website: 'string',company: { }},
  ];
  const expectedUrl = 'https://jsonplaceholder.typicode.com/users'

  let actualDocs: Doctor[] | undefined;
  fetchService.getDoctors().subscribe(doctors=>{
    expect(doctors.length).toBe(2)
    actualDocs = doctors 
  })  

  const request = controller.expectOne(expectedUrl)
  request.flush(expectedDoctors)
  controller.verify();

  expect(actualDocs).toEqual(expectedDoctors)

  })

  
  it('be created', inject([FetchService], (service: FetchService) =>{
    expect(service).toBeTruthy()
  }))
});
