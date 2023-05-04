export class AuthService {
    loggedIn = false;


    isAuthenticated(){
        const promise = new Promise(
            (reSolve, reject) => {
                setTimeout(()=> {
                    reSolve(this.loggedIn)
                },800);
            }
        );
        return promise;
    }

    login(){
        this.loggedIn  = true;
    }
    
    logout(){
        this.loggedIn = false;
    }
}