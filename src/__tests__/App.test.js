import { cleanup, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom";
import { App } from "../App";
import MainRouters from "../routes/MainRouters";

describe('App', () => {
    afterEach(cleanup);
    it('Should navigate to Login screen successfully', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <MainRouters/>
            </MemoryRouter>
        );

        expect(screen.getByText(/Login Page/i)).toBeInTheDocument()
    })

    // https://testing-library.com/docs/example-react-router/
    it('full app rendering', () => {
       render(<App/>, {wrapper: MemoryRouter})
       expect(screen.getByText(/Login Page/i)).toBeInTheDocument()
    })
})