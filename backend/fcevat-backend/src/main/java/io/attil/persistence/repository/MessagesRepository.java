package io.attil.persistence.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import io.attil.persistence.entities.MessageEntity;

public interface MessagesRepository extends CrudRepository<MessageEntity, Long> {
	List<MessageEntity> findAll();
}
