import { cleanup, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom";
import { App } from "../App";

// describe('App', () => {
//     afterEach(cleanup);
//     it('Should navigate to Login screen successfully', () => {
//         render(
//             <MemoryRouter initialEntries={['/']}>
//                 <App/>
//             </MemoryRouter>
//         );

//         expect(screen.getByText(/Login Page/i)).toBeInTheDocument()
//     })
// })