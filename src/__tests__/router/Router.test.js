import { cleanup, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom";
import AppRouters from "../../routes/AppRouters";

describe('Router', () => {
    afterEach(cleanup);

    it('Should navigate to Home screen successfully', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <AppRouters/>
            </MemoryRouter>
        );

        expect(screen.getByText(/Home/i)).toBeInTheDocument()
    })
    it('Should navigate to Products screen successfully', () => {
        render(
            <MemoryRouter initialEntries={['/products']}>
                <AppRouters/>
            </MemoryRouter>
        );

        expect(screen.getByText(/Product List/i)).toBeInTheDocument()
    })

    it('Should navigate to Product Form screen successfully', () => {
        render(
            <MemoryRouter initialEntries={['/products/form']}>
                <AppRouters/>
            </MemoryRouter>
        );

        expect(screen.getByText(/Product Form/i)).toBeInTheDocument()
    })

    it('Should navigate to Product Form screen by id successfully', () => {
        render(
            <MemoryRouter initialEntries={['/products/form/001']}>
                <AppRouters/>
            </MemoryRouter>
        );

        expect(screen.getByText(/Product Form/i)).toBeInTheDocument()
    })
    it('Should navigate to Not found screen by id successfully', () => {
        render(
            <MemoryRouter initialEntries={['/productsss']}>
                <AppRouters/>
            </MemoryRouter>
        );

        expect(screen.getByText(/PAGE NOT FOUND/i)).toBeInTheDocument()
    })
})