export const htmlTemplate = `
    <div class="row mb-5 mt-3">
        <div class="col-sm-12">
            <h4 class="text-center text-uppercase">Contacts</h4>
        </div>
    </div>
    <div class="row mb-5">
        <div class="col-sm-12 col-md-9">
            <label for="query">Query</label>
            <input class="form-control" placeholder="Query" id="query" type="text" placeholder="Filter by name"
                [(ngModel)]="searchQuery"
                (ngModelChange)="searchPhoneBook()"
            >
        </div>
        <div class="col-sm-12 col-md-3">
            <label for="order-select">&nbsp;</label>
            <select  id="order-select" class="custom-select" [(ngModel)]="order" (ngModelChange)="orderContacts()">
                <option selected value="">Order By</option>
                <option value="desc">Name Desc</option>
                <option value="asc">Name Asc</option>
            </select>
        </div>
    </div>
    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">phone Number</th>
                <th scope="col">Address</th>
            </tr>
        </thead>
        <tbody>
            <tr *ngFor="let contact of filteredContacts; let i = index">
                <th scope="row">{{i}}</th>
                <td>{{contact.name}}</td>
                <td>{{contact.phone_number}}</td>
                <td>{{contact.address}}</td>
            </tr>
        </tbody>
    </table>
`;
