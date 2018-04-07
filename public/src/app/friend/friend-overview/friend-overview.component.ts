import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http'

interface joke {
    id: number,
    joke: string
}

@Component({
    selector: 'app-friend-overview',
    templateUrl: './friend-overview.component.html',
    styleUrls: ['./friend-overview.component.scss']
})
export class FriendOverviewComponent implements OnInit {
    jokes: joke[];

    constructor(private http: HttpClient) {

    }

    ngOnInit() {
        this.getJokes()
    }

    getJokes() {
        this.http.get('https://api.icndb.com/jokes').subscribe(
            (data: {type, value}) => {
                if (data.value) this.jokes = data.value;
            },
            (error) => {
                console.error('there could not be an error - its chuck.')
            }
        )

    }
}
