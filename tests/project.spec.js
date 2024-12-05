import {chromium} from '@playwright/test';
(async()=>{
    const browser = await chromium.launch({headless: true})

})();