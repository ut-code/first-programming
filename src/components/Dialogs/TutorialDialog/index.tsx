import {
  Button,
  HStack,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useAtom } from "jotai";
import { Fragment, useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { isHintOpen } from "../../../atoms";

export type TutorialDialogProps = {
  title: string;
  isFirstView: boolean;
  steps: TutorialDialogPropsStep[];
  onClose(): void;
};

export type TutorialDialogPropsStep = { title: string; content: JSX.Element };

export function TutorialDialog(props: TutorialDialogProps): JSX.Element {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isOpen, setIsOpen] = useAtom(isHintOpen);

  function onClose() {
    setIsOpen(false);
    setSelectedIndex(0);
    props.onClose();
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW="60vw" maxH="80vh" margin="auto">
        <ModalHeader>{props.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody
          display="flex"
          flexDirection="column"
          overflowY="auto"
          alignItems="center"
        >
          <HStack spacing={4} mb={4} wrap="wrap">
            {props.steps.map((step, i) => (
              <Fragment key={step.title}>
                {i > 0 && <Icon mx={2} w={5} h={5} as={RiArrowRightSLine} />}
                <Button
                  key={step.title}
                  colorScheme={i === selectedIndex ? "blue" : undefined}
                  variant={i === selectedIndex ? "solid" : "unstyled"}
                  // isDisabled={i === selectedIndex}
                  onClick={() => {
                    setSelectedIndex(i);
                  }}
                >
                  {step.title}
                </Button>
              </Fragment>
            ))}
          </HStack>
          {props.steps[selectedIndex].content}
        </ModalBody>
        <ModalFooter>
          <HStack spacing={2}>
            {selectedIndex !== 0 && (
              <Button
                onClick={() => setSelectedIndex(selectedIndex - 1)}
                variant={"outline"}
              >
                前へ
              </Button>
            )}
            {selectedIndex !== props.steps.length - 1 && (
              <Button
                onClick={() => setSelectedIndex(selectedIndex + 1)}
                colorScheme={props.isFirstView ? "blue" : undefined}
                variant={"outline"}
              >
                次へ
              </Button>
            )}
            {(!props.isFirstView ||
              selectedIndex === props.steps.length - 1) && (
              <Button onClick={onClose} variant={"solid"} colorScheme={"blue"}>
                はじめる
              </Button>
            )}
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
