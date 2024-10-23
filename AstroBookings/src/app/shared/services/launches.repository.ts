import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment.development';
import { delay, Observable, of } from 'rxjs';
import { LaunchDto, LaunchStatus } from '../models/launch.dto';

/**
 * Launches Repository, provides methods to get launches
 * - Abstract class to provide a common interface for all launches repositories
 */
@Injectable()
export abstract class LaunchesAbstractRepository {
  abstract getLaunchesByStatus$(status: LaunchStatus): Observable<LaunchDto[]>;
}

/**
 * Launches Memory Repository, provides methods to get launches from memory
 * - Used for testing purposes
 */
export class LaunchesMemoryRepository implements LaunchesAbstractRepository {
  private readonly launches: LaunchDto[] = [
    {
      id: '1',
      agencyId: '1',
      rocketId: '1',
      date: new Date(2029, 5, 1),
      mission: 'Moon Landing',
      destination: 'Moon',
      pricePerSeat: 100,
      status: 'scheduled',
    },
    {
      id: '2',
      agencyId: '2',
      rocketId: '2',
      date: new Date(2033, 8, 2),
      mission: 'Mars Flight',
      destination: 'Mars',
      pricePerSeat: 200,
      status: 'scheduled',
    },
    {
      id: '3',
      agencyId: '3',
      rocketId: '3',
      date: new Date(2037, 11, 3),
      mission: 'Jupiter Mission',
      destination: 'Jupiter',
      pricePerSeat: 300,
      status: 'aborted',
    },
  ];

  getLaunchesByStatus$(status: LaunchStatus): Observable<LaunchDto[]> {
    return of(this.launches.filter((launch) => launch.status === status)).pipe(delay(2000));
  }
}

/**
 * Launches Rest Repository, provides methods to get launches from the REST API
 * @requires HttpClient
 */
export class LaunchesRestRepository extends LaunchesAbstractRepository {
  private readonly baseUrl = `${environment.apiUrl}/launches`;
  constructor(private httpClient: HttpClient) {
    super();
  }
  /**
   * Gets launches by status
   * @param status - The status of the launches to get
   * @returns - An observable that emits the launches
   */
  getLaunchesByStatus$(status: LaunchStatus): Observable<LaunchDto[]> {
    const forcedDelay = '&delay=1000';
    const forcedStatus = ''; //
    const forcedEmpty = '';

    const url = `${this.baseUrl}?q=${status}${forcedEmpty}${forcedDelay}${forcedStatus}`;

    return this.httpClient.get<LaunchDto[]>(`${url}`);
  }
}
