package io.attil.persistence.repository;

import org.springframework.data.repository.CrudRepository;

import io.attil.persistence.entities.MessageEntity;

public interface MessagesRepository extends CrudRepository<MessageEntity, Long> {

}
