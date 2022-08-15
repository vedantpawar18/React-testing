import Button from "./Button";
import {render, screen, fireEvent} from "@testing-library/react";
import App from "../App";
import renderer from "react-test-renderer"
import userEvent from "@testing-library/user-event"


describe("Testing the custom Button", ()=>{
    it("Should be present in the DOM",()=>{
        render(<Button>Click Me</Button>);
        let button= screen.getByText("Click Me");
        expect (button).toBeInTheDocument;
    })

    it("Should have button with text click me",()=>{
        render(<App></App>);
        screen.debug()
        let button= screen.getByTestId("customButton");
        expect (button).toBeInTheDocument;
    })

    it("Should render without any children",()=>{
        render(<Button></Button>);
        screen.debug()
        let button= screen.getByTestId("customButton");
        expect (button).toBeEmptyDOMElement();
    })

    it("Should toggle the theme",()=>{
        render(<App></App>);
        screen.debug()
        let element= screen.getByText("Theme is light");
        expect(element).toHaveTextContent("light");
        let button= screen.getByTestId("customButton");
        userEvent.click(button);

        expect(element).toHaveTextContent("dark");
        userEvent.click(button);
        expect(element).toHaveTextContent("light")
    })

    it("Should call the given function",()=>{
        const mockFunc= jest.fn();
        render(<Button onClick={mockFunc}>Click Me</Button>);
        // screen.debug()
        let button= screen.getByTestId("customButton");
        userEvent.click(button);
        // fireEvent.click(button) could be alternative to userEvent
        expect(mockFunc).toBeCalled();
    })

    it("Should match the snapshot", () => {
        const tree = renderer
          .create(
            <Button colorScheme={"green"} variant={"outline"}>
              Increment Counter
            </Button>
          )
          .toJSON();
        expect(tree).toMatchSnapshot();
      });
})