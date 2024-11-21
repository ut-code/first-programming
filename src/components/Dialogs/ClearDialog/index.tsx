import {
  AspectRatio,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";

export function ClearDialog(props: {
  visible: boolean;
  next: () => void;
  onClose: () => void;
}): JSX.Element {
  return (
    <Modal size="3xl" isOpen={props.visible} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>クリアおめでとうございます！</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text mb={3}>
            クリアおめでとうございます！右下の「次のステージへ」を押して、次のステップに進みましょう！このステップをもう一度遊びたい場合は、
            「キャンセル」をおしてください
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button onClick={props.next} colorScheme="white" textColor={"black"}>
            キャンセル
          </Button>
          <Button onClick={props.next} colorScheme="blue">
            次のステージへ
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
