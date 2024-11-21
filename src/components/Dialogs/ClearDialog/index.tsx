import {
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
  next: (() => void) | null;
  onClose: () => void;
  home: () => void;
}): JSX.Element {
  return (
    <Modal size="3xl" isOpen={props.visible} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {props.next !== null
            ? "クリアおめでとうございます！"
            : "全ステージクリアおめでとうございます！"}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {props.next !== null ? (
            <Text mb={3}>
              クリアおめでとうございます！右下の「次のステージへ」を押して、次のステップに進みましょう！
              このステップをもう一度遊びたい場合は、「キャンセル」をおしてください。
            </Text>
          ) : (
            <Text mb={3}>
              お疲れ様でした！これでこの企画は終わりとなります。
              駒場祭トップページに戻る場合は「戻る」ボタンをおしてください！
              もう一度遊びたい場合、他の迷路も試してみたい場合は、「キャンセル」をおしてください。
              遊んでくださり、ありがとうございました！
            </Text>
          )}
        </ModalBody>
        <ModalFooter>
          {props.next !== null ? (
            <>
              <Button
                onClick={props.onClose}
                colorScheme="white"
                textColor="black"
              >
                キャンセル
              </Button>
              <Button onClick={props.next} colorScheme="blue">
                次のステージへ
              </Button>
            </>
          ) : (
            <>
              <Button
                onClick={props.onClose}
                colorScheme="white"
                textColor="black"
              >
                キャンセル
              </Button>
              <Button onClick={props.home} colorScheme="green">
                トップページに戻る
              </Button>
            </>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
