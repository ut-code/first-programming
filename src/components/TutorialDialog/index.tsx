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
import { isHintOpen } from "../../atoms";

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
    <Modal size="4xl" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{props.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody display="flex" alignItems="center">
          {props.steps.map((step, i) => (
            <Fragment key={step.title}>
              {i > 0 && <Icon mx={2} w={5} h={5} as={RiArrowRightSLine} />}
              <Button
                key={step.title}
                colorScheme="blue"
                variant={i === selectedIndex ? "solid" : "ghost"}
                isDisabled={i === selectedIndex}
                flexGrow={1}
                flexBasis={0}
                onClick={() => {
                  setSelectedIndex(i);
                }}
              >
                {step.title}
              </Button>
            </Fragment>
          ))}
        </ModalBody>
        <ModalBody>{props.steps[selectedIndex].content}</ModalBody>
        <ModalFooter>
          <HStack spacing={2}>
            <Button
              isDisabled={selectedIndex === 0}
              onClick={() => {
                setSelectedIndex(selectedIndex - 1);
              }}
            >
              前へ
            </Button>
            <Button
              isDisabled={selectedIndex === props.steps.length - 1}
              onClick={() => {
                setSelectedIndex(selectedIndex + 1);
              }}
              colorScheme={props.isFirstView ? "blue" : undefined}
            >
              次へ
            </Button>
            {(!props.isFirstView || selectedIndex === props.steps.length - 1) && (
              <Button variant="outline" onClick={onClose}>
                はじめる
              </Button>
            )}
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
