class hunter{
    constructor(){
        this.api = "https://hunter.io/v2"
        this.velen_api = "https://velen.hunter.io"
        this.headers={"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/73.0.3683.86 Chrome/73.0.3683.86 Safari/537.36","x-requested-with": "xmlhttprequest"}
    }
    async req(url, data,method="GET"){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: method,
                headers: this.headers,
                body: data
            }).then(res => res.json()).then(data => {resolve(data);
            }).catch(err => reject(err));
        });
    }
    async verify_email(email){
        return (await this.req(`${this.api}/email-count?domain=${email}`));
    }
    async find_domain(domain){
        return (await this.req(`${this.api}/domains-suggestion?query=${domain}`));
    }
    async domain_info(domain){
        return (await this.req(`${this.velen_api}/minimal-domain-info?domain=${domain}&format=json`));
    }
}
module.exports = {hunter};