import{test,expect} from'@playwright/test';
import { Sign } from './pages/sign';

test('netflix',async({page})=>{
    const login = new Sign(page);
    await page.gotoSign();
    await sign.Sign('test@gmail.com','test@1234');
})